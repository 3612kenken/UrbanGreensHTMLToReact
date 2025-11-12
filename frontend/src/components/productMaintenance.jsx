import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api";

export default function ProductMaintenance() {
  const [formData, setFormData] = useState({
    ProductName: "",
    Description: "",
    Price: "",
  });
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.ProductName || !formData.Description || !formData.Price) {
      alert("All fields are required");
      return;
    }

    try {
      if (editingId) {
        // Update product
        const response = await fetch(`${API_URL}/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Product updated successfully");
          setEditingId(null);
          setFormData({ ProductName: "", Description: "", Price: "" });
          fetchProducts();
        } else {
          alert("Failed to update product");
        }
      } else {
        // Create new product
        const response = await fetch(`${API_URL}/products`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Product added successfully");
          setFormData({ ProductName: "", Description: "", Price: "" });
          fetchProducts();
        } else {
          alert("Failed to add product");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  // Handle edit product
  const handleEdit = (product) => {
    setFormData({
      ProductName: product.ProductName,
      Description: product.Description,
      Price: product.Price,
    });
    setEditingId(product._id);
  };

  // Handle delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Product deleted successfully");
        fetchProducts();
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setFormData({ ProductName: "", Description: "", Price: "" });
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Product Maintenance</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <form className="form" onSubmit={handleSubmit}>
              <label className="label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                id="ProductName"
                name="ProductName"
                value={formData.ProductName}
                onChange={handleInputChange}
              />
              <label className="label">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="Description"
                value={formData.Description}
                onChange={handleInputChange}
              />
              <label className="label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="Price"
                value={formData.Price}
                onChange={handleInputChange}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                {editingId ? "Update Product" : "Add Product"}
              </button>
              &nbsp; &nbsp;
              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                ) : products.length === 0 ? (
                  <tr>
                    <td colSpan="4">No products found</td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.ProductName}</td>
                      <td>{product.Description}</td>
                      <td>${product.Price}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
