document.getElementById("ratingForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const review = document.getElementById("review").value;
    const votes = parseInt(document.getElementById("votes").value);
    const average_cost = parseInt(document.getElementById("average_cost").value);
    const online_order = parseInt(document.getElementById("online_order").value);
    const book_table = parseInt(document.getElementById("book_table").value);

    const reviewSentiment = await getSentimentScore(review);

    const rating = (0.2 * reviewSentiment) + (0.1 * votes) + (0.05 * average_cost) + (0.05 * online_order) + (0.05 * book_table);
    
    document.getElementById("result").innerText = `Predicted Rating: ${rating.toFixed(2)}`;
});

async function getSentimentScore(review) {
    const words = review.split(' ').length;
    return Math.min(words, 5);
}
