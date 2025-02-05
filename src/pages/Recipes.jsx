/* Styling for the Chicken Recipes page */
.recipe-container {
    padding: 20px;
    width: 100vw;
    height: auto;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
}

.recipe-list {
    list-style: decimal inside;
    font-size: 1.5rem;
    color: #555;
    width: 90%;
    text-align: left;
}

.recipe-list li {
    margin-bottom: 15px;
    cursor: pointer;
}

.recipe-list li:hover {
    color: #007bff;
}

.recipe-section {
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.recipe-section h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #333;
}

.recipe-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 10px;
}

.recipe-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: 20px 0;
    border-radius: 8px;
}

.scroll-up-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

.scroll-up-button:hover {
    background-color: #45a049;
}
