Nadřízený tě znovu oslovil s novou prací. Nyní se jedná o administrační systém pro firmu Spedle. Tvým úkolem bude vytvořit algoritmus, který vypočítá výplatu pro zaměstnance. Každý zaměstnanec má minimální mzdu 23 000 korun. Čím déle ve firmě je, tím větší dostane zaměstnanecký bonus, jehož základ je 500 korun a násobí se počtem odpracovaných let. Jelikož je firma Spedle štědrá, zaměstnancům s větším počtem dětí než-li 1 přidávají 1000 korun.

> Vstupní kód

```js

class Employee {
    constructor(yearsWorked, numberOfChildren) {
        this.yearsWorked = yearsWorked;
        this.numberOfChildren = numberOfChildren;
    }
}

let employees = [
    new Employee(22, 1),
    new Employee(1, 3),
    new Employee(8, 4),
    new Employee(12, 0)
]

function calculateSalary(employee) {
    let yearsWorked = employee.yearsWorked;
    let numberOfChildren = employee.numberOfChildren;
    
    let salary = 0;

    //sem piš kód
    
    return salary;
}

employees.forEach(element => {
    console.log(calculateSalary(element));
});
```

> Výstup
```
34000
24500
28000
29000
```