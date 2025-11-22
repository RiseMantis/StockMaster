const apiUrl = "http://localhost:4000/api/stock"; // Change if needed
document.addEventListener("DOMContentLoaded", () => {
  loadStock();

  // Event delegation for update button clicks
  document.getElementById('stockTable').addEventListener('click', async (e) => {
    if (e.target.classList.contains('update-btn')) {
      const row = e.target.closest('tr');
      const productId = row.dataset.id;
      const onHand = row.querySelector('input.onHand').value;
      const freeUse = row.querySelector('input.freeUse').value;

      // Send update to API
      const resp = await fetch(apiUrl + "/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: productId,
          onHand: parseInt(onHand),
          freeToUse: parseInt(freeUse)
        })
      });
      const data = await resp.json();
      document.getElementById('stockMsg').textContent = data.message;
      loadStock();
    }
  });
});

async function loadStock() {
  const tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">Loading...</td></tr>';
  const resp = await fetch(apiUrl);
  const stock = await resp.json();
  tbody.innerHTML = '';
  stock.forEach(item => {
    tbody.innerHTML += `
      <tr data-id="${item.id}">
        <td>${item.product}</td>
        <td>${item.cost} Rs</td>
        <td><input class="onHand" type="number" value="${item.onHand}" min="0"></td>
        <td><input class="freeUse" type="number" value="${item.freeToUse}" min="0"></td>
        <td><button class="update-btn">Update</button></td>
      </tr>
    `;
  });
}
