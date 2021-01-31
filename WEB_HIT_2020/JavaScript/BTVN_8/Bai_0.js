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

const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
]

// nghèo thì loại (balance <= 500000)
const listBalance = listAccounts.filter(function ( value, index) {
    return value.balance > 500000 
});
// console.log(listBalance);

// loại id ra khỏi tài khoản, nếu chưa có thuộc tính active thì đặt isActive = null
// nếu đã có thì isActive = true
const newListAccount = listAccounts.map( function ( value, index)  {
	value.isActive = 'isActive' in value ? true : null;
	return value;
});
// console.log(newListAccount);

// tính tổng balance
const totalBalance = listAccounts.reduce((accumulator, item) =>
    accumulator + item.balance, 0
)
// console.log(totalBalance);


// thống kê theo tuổi
const statisticsByAge = listPersons.reduce(
    (accumulator, item) => {
        if (item.age <= 18) {
            accumulator.treCon++
        } else if (item.age <= 30) {
            accumulator.thanhNien++;
        } else {
            accumulator.nguoiGia++;
        }
        return accumulator;
    }, {
        treCon: 0,
        thanhNien: 0,
        nguoiGia: 0
    }
)
console.log(statisticsByAge);
/*
output dạng: 
{
    treCon: 5,
    thanhNien: 2,
    nguoiGia: 3
}
*/