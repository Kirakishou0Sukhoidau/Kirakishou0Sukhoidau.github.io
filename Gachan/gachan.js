const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const quayButton = document.getElementById("quay");

quayButton.addEventListener("click", function() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // Kiểm tra tính hợp lệ của phạm vi
    if (min > max) {
        alert("Giá trị 'Từ' phải nhỏ hơn hoặc bằng giá trị 'Đến'.");
        return;
    }

    // Tạo số ngẫu nhiên trong phạm vi
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Hiển thị số quay ra
    alert(`Số quay ra là: ${randomNumber}`);
});


