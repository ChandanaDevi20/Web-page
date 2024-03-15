// Sample order data
const orders = [
    { date: '2024-03-15', order_id: 1, product: 'Product A', customer: 'Customer X' },
    { date: '2024-03-16', order_id: 2, product: 'Product B', customer: 'Customer Y' },
    { date: '2024-03-17', order_id: 3, product: 'Product C', customer: 'Customer Z' }
];

// Populate calendar days
const daysList = document.querySelector('.days');
for (let i = 1; i <= 31; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    daysList.appendChild(li);
}

// Add click event listener to each day
const dayElements = document.querySelectorAll('.days li');
dayElements.forEach(day => {
    day.addEventListener('click', () => {
        const selectedDate = `2024-03-${day.textContent.padStart(2, '0')}`;
        const ordersOnDate = orders.filter(order => order.date === selectedDate);
        if (ordersOnDate.length > 0) {
            const orderDetailsDiv = document.getElementById('orderDetails');
            orderDetailsDiv.innerHTML = '';
            ordersOnDate.forEach(order => {
                const orderInfo = document.createElement('p');
                orderInfo.textContent = `${order.order_id}: ${order.product} - ${order.customer}`;
                orderDetailsDiv.appendChild(orderInfo);
            });
            orderDetailsDiv.classList.remove('hidden');
        } else {
            alert('No orders for selected date');
        }
    });
});
