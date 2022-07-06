function mostProfitableDepartment(salesData) {
    var departments = {};
    var departmentSales = [];
    var mostProfitableDepartment;

    for (var i = 0; i < salesData.length; i++) {
        var department = salesData[i].department;
        var totalSales = salesData[i].sales;

        if (departments[department] === undefined) {
            departments[department] = totalSales;
        } else {
            departments[department] += totalSales;
        }
    }

    for (var department in departments) {
        departmentSales.push({
            department: department,
            sales: departments[department]
        });
    }

    departmentSales.sort(function(a, b) {
        if (a.sales > b.sales) {
            return -1;
        } else if (a.sales < b.sales) {
            return 1;
        } else {
            if (a.department < b.department) {
                return -1;
            } else if (a.department > b.department) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    mostProfitableDepartment = departmentSales[0].department;
    // mostProfitableDepartmentSales = departmentSales[0].sales;

    return mostProfitableDepartment;
}

export default mostProfitableDepartment;