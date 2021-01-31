/*
  - Bài 2:
    a) Viết hàm truyền vào 1 danh sách tài khoản, kiểm tra xem tài khoản nào đã nạp trên 1 triệu.
        và set lại loại tài khoản đó thành VIP.
    b) Viết hàm truyền vào 1 danh sách tài khoản, id tài khoản, số tiền để nạp tiền cho 1 tài khoản theo id đó.
        Kiểm tra nếu balance = 0 thì khuyến mại nạp lần đầu cho tài khoản đó 200%.
        Còn lại với các tài khoản khác sẽ không có khuyến mại.
    c) Viết hàm kiểm tra tài khoản nào có thuộc tính isActive thì set thành true sau đó in ra màn hình.
    ---Sau mỗi phần đều in ra màn hình kết quả.---
*/

// Đáp án:

function setVIP(listAccount) {
  for (let account of listAccount) {
    if (account.balance > 1000000) {
      account.type = 'VIP';
    }
  }

  console.log('Danh sách sau khi set VIP:', listAccount);
}


function addMoneyById(listAccount, id, amount) {
  let dem = 0;
  for (let account of listAccount) {
    if (account.id === id) {
      dem++;

      if (account.balance === 0) {
        dem++;
        account.balance += amount * 3;
      } else {
        account.balance += amount;
      }
    }
  }

  if (dem === 0) {
    console.log('ID bạn nhập không có trong hệ thống.');
  } else if (dem === 1) {
    console.log(`Chúc mừng bạn đã nạp thành công ${amount}vnđ cho tài khoản có ID ${id}`);
  } else {
    console.log(`Chúc mừng bạn đã được khuyến mãi 200% cho lần nạp đầu.`);
  }
}

function activeAccount(listAccount) {
  for (let account of listAccount) {
    for (let key in account) {
      if (key === 'isActive') {
        account[key] = true;
      }
    }
  }

  console.log('Danh sách account sau khi update:', listAccount);
}

function main() {
    const listAccounts = [
        { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
        { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
        { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
        { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
        { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
        { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
        { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
        { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
        { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
        { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
        { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
        { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
        { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
        { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
        { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
        { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
    ]
    console.log('-----------------------');
    // setVIP(listAccounts);
    // addMoneyById(listAccounts, 13, 100000);
    activeAccount(listAccounts);
}

main();