import { useState, useEffect } from "react";
import {
  Search,
  Trash2,
  Download,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import dsrData from "../constants/dsr.json";
import "./Calculator.css";

const Calculator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedGoods, setSelectedGoods] = useState([]);

  // Use DSR data instead of hardcoded goods
  const goods = Array.isArray(dsrData) ? dsrData : [];

  // Auto-search when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = goods.filter(
        (good) =>
          (good.good_title &&
            String(good.good_title)
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          (good.code_number &&
            String(good.code_number)
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  }, [searchQuery, goods]);

  const handleSearch = () => {
    if (searchQuery.trim().length < 2) {
      setShowResults(false);
      setSearchResults([]);
      return;
    }

    const results = goods.filter(
      (good) =>
        (good.good_title &&
          String(good.good_title)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (good.code_number &&
          String(good.code_number)
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
    );

    setSearchResults(results);
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const addGoodToTable = (good) => {
    // Validate good object
    if (!good || !good.code_number) {
      console.error("Invalid good object:", good);
      return;
    }

    const existingIndex = selectedGoods.findIndex(
      (item) => item.code_number === good.code_number
    );

    if (existingIndex !== -1) {
      const updatedGoods = [...selectedGoods];
      updatedGoods[existingIndex].quantity += 1;
      setSelectedGoods(updatedGoods);
    } else {
      setSelectedGoods([
        ...selectedGoods,
        {
          ...good,
          quantity: 1,
          marketPrice: 0,
        },
      ]);
    }

    setShowResults(false);
    setSearchQuery("");
  };

  const updateMarketPrice = (index, value) => {
    if (index < 0 || index >= selectedGoods.length) {
      console.error("Invalid index for updateMarketPrice:", index);
      return;
    }

    const updatedGoods = [...selectedGoods];
    updatedGoods[index].marketPrice = parseFloat(value) || 0;
    setSelectedGoods(updatedGoods);
  };

  const removeGood = (index) => {
    if (index < 0 || index >= selectedGoods.length) {
      console.error("Invalid index for removeGood:", index);
      return;
    }

    const updatedGoods = selectedGoods.filter((_, i) => i !== index);
    setSelectedGoods(updatedGoods);
  };

  const clearAll = () => {
    if (selectedGoods.length === 0) return;

    if (window.confirm("Are you sure you want to clear all selected goods?")) {
      setSelectedGoods([]);
    }
  };

  const exportQuote = () => {
    if (selectedGoods.length === 0) {
      alert("No goods selected to export.");
      return;
    }

    let csvContent =
      "Code Number,Good Title,Unit,Good Price,Market Price,Quantity,Good Total,Market Total,Difference\n";

    selectedGoods.forEach((good) => {
      const goodPrice = good.good_price || 0;
      const quantity = good.quantity || 0;
      const marketPrice = good.marketPrice || 0;
      const goodTotal = goodPrice * quantity;
      const marketTotal = marketPrice * quantity;
      const difference = marketTotal - goodTotal;
      csvContent += `${good.code_number || "N/A"},"${
        good.good_title || "Unknown Item"
      }",${good.good_unit || "N/A"},₹${goodPrice.toFixed(
        2
      )},₹${marketPrice.toFixed(2)},${quantity},₹${goodTotal.toFixed(
        2
      )},₹${marketTotal.toFixed(2)},₹${difference.toFixed(2)}\n`;
    });

    const totalGoodPrice = selectedGoods.reduce(
      (sum, good) => sum + (good.good_price || 0) * (good.quantity || 0),
      0
    );
    const totalMarketPrice = selectedGoods.reduce(
      (sum, good) => sum + (good.marketPrice || 0) * (good.quantity || 0),
      0
    );
    const totalDifference = totalMarketPrice - totalGoodPrice;

    csvContent += `\nTotal Good Price,₹${totalGoodPrice.toFixed(2)}\n`;
    csvContent += `Total Market Price,₹${totalMarketPrice.toFixed(2)}\n`;
    csvContent += `Total Difference,₹${totalDifference.toFixed(2)}\n`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `construction-quote-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const calculateTotals = () => {
    const totalGoodPrice = selectedGoods.reduce(
      (sum, good) => sum + (good.good_price || 0) * (good.quantity || 0),
      0
    );
    const totalMarketPrice = selectedGoods.reduce(
      (sum, good) => sum + (good.marketPrice || 0) * (good.quantity || 0),
      0
    );
    const totalDifference = totalMarketPrice - totalGoodPrice;

    return { totalGoodPrice, totalMarketPrice, totalDifference };
  };

  const totals = calculateTotals();

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="section-header">
          <h2>DSR vs Market Price Comparison</h2>
          <p>
            Compare DSR (Departmental Schedule of Rates) prices with current
            market prices
          </p>
        </div>

        <div className="calculator-container">
          <div className="search-section">
            <div className="search-box">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by good title or code number..."
                autoComplete="off"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="btn btn-primary"
              >
                <Search size={16} /> Search
              </button>
            </div>
            {showResults && (
              <div className="search-results show">
                {searchResults.length === 0 ? (
                  <div className="search-result-item">No goods found</div>
                ) : (
                  searchResults.map((good) => (
                    <div
                      key={good.code_number || "unknown"}
                      className="search-result-item"
                      onClick={() => addGoodToTable(good)}
                    >
                      <div className="result-info">
                        <h4>{good.good_title || "Unknown Item"}</h4>
                        <p>
                          Code: {good.code_number || "N/A"} | Unit:{" "}
                          {good.good_unit || "N/A"}
                        </p>
                      </div>
                      <div className="result-price">
                        ₹{(good.good_price || 0).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="calculator-table-section">
            <h3>Selected Goods</h3>
            <div className="table-container">
              <table className="goods-table">
                <thead>
                  <tr>
                    <th>Code Number</th>
                    <th>Good Title</th>
                    <th>Unit</th>
                    <th>Good Price</th>
                    <th>Market Price</th>
                    <th>Difference</th>
                    <th>Good Total</th>
                    <th>Market Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedGoods.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="empty-table">
                        <div>
                          No goods selected. Search and add goods to compare DSR
                          prices with market prices.
                        </div>
                      </td>
                    </tr>
                  ) : (
                    selectedGoods.map((good, index) => {
                      const goodPrice = good.good_price || 0;
                      const quantity = good.quantity || 0;
                      const marketPrice = good.marketPrice || 0;
                      const goodTotal = goodPrice * quantity;
                      const marketTotal = marketPrice * quantity;
                      const difference = marketTotal - goodTotal;
                      const isHigher = difference > 0;
                      const isLower = difference < 0;

                      return (
                        <tr key={`${good.code_number || "unknown"}-${index}`}>
                          <td>{good.code_number || "N/A"}</td>
                          <td>{good.good_title || "Unknown Item"}</td>
                          <td>{good.good_unit || "N/A"}</td>
                          <td>₹{goodPrice.toFixed(2)}</td>
                          <td>
                            <input
                              type="number"
                              value={good.marketPrice}
                              min="0"
                              step="0.01"
                              onChange={(e) =>
                                updateMarketPrice(index, e.target.value)
                              }
                              placeholder="0.00"
                            />
                          </td>
                          <td
                            className={`difference ${
                              isHigher ? "higher" : isLower ? "lower" : ""
                            }`}
                          >
                            <span className="difference-value">
                              {isHigher ? "+" : ""}₹{difference.toFixed(2)}
                            </span>
                            {isHigher && (
                              <TrendingUp size={14} className="trend-icon" />
                            )}
                            {isLower && (
                              <TrendingDown size={14} className="trend-icon" />
                            )}
                          </td>
                          <td>₹{goodTotal.toFixed(2)}</td>
                          <td>₹{marketTotal.toFixed(2)}</td>
                          <td>
                            <button
                              className="remove-btn"
                              onClick={() => removeGood(index)}
                            >
                              <Trash2 size={12} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="totals-section">
              <div className="total-row">
                <span className="total-label">Total DSR Price:</span>
                <span className="total-value">
                  ₹{totals.totalGoodPrice.toFixed(2)}
                </span>
              </div>
              <div className="total-row">
                <span className="total-label">Total Market Price:</span>
                <span className="total-value">
                  ₹{totals.totalMarketPrice.toFixed(2)}
                </span>
              </div>
              <div
                className={`total-row grand-total ${
                  totals.totalDifference > 0
                    ? "higher"
                    : totals.totalDifference < 0
                    ? "lower"
                    : ""
                }`}
              >
                <span className="total-label">Price Difference:</span>
                <span className="total-value">
                  {totals.totalDifference > 0 ? "+" : ""}₹
                  {totals.totalDifference.toFixed(2)}
                  {totals.totalDifference > 0 && (
                    <TrendingUp size={16} className="trend-icon" />
                  )}
                  {totals.totalDifference < 0 && (
                    <TrendingDown size={16} className="trend-icon" />
                  )}
                </span>
              </div>
            </div>

            <div className="calculator-actions">
              <button
                type="button"
                onClick={clearAll}
                className="btn btn-secondary"
              >
                <Trash2 size={16} /> Clear All
              </button>
              <button
                type="button"
                onClick={exportQuote}
                className="btn btn-primary"
              >
                <Download size={16} /> Export Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
