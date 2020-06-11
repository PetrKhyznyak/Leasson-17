    var userObj = {
        age: 20,
        firstName: 'Name',
        lastName: 'Last',
        fullName() {
            return `${userObj.firstName} ${userObj.lastName}`;
        }
    };
    console.log(userObj.fullName());


    function defUpperStr(str) {
        return (str || 'default text').toUpperCase()
    }

    console.log(defUpperStr('my text'));
    console.log(defUpperStr());

    function evenFn(n) {
        var arr = [];
        for (i=1; i<=n; i++) if (i % 2 === 0) arr.push(i);
        return arr;
    }

    console.log(evenFn(14))


    function weekFn(day) {
        let str = '';
        switch (day) {
            case 1: str = 'Понедельник';break;
            case 2: str = 'Вторник';break;
            case 3: str = 'Среда';break;
            case 4: str = 'Четверг';break;
            case 5: str = 'Пятница';break;
            case 6: str = 'Суббота';break;
            case 7: str = 'Воскресенье';break;
            default: str = null;
        }
        return str;
    }

    console.log(weekFn(1)); // 'Понедельник'
    console.log(weekFn(3)); // 'Среда'
    console.log(weekFn(7)); // 'Воскресенье'
    console.log(weekFn(9)); // null
    console.log(weekFn(1.5)); // null
    console.log(weekFn('2')); // null


    function ageClassification(num) {
        return num > 0
            ? num > 24
                ? num > 44
                    ? num > 65
                        ? num > 75
                            ? num > 90
                                ? num > 122
                                    ? null
                                    : 'долгожители'
                                : 'старческий возраст'
                            : 'пожилой возраст'
                        : 'средний возраст'
                    : 'молодой возраст'
                : 'детский возраст'
            : null;
    }
    console.log(ageClassification(23));
    console.log(ageClassification(67));
    console.log(ageClassification(45));

    function oddFn(n) {
    let arr = [];
    let i = 0;
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
    }

    console.log(oddFn(14));


    function mainFunc(a, b, callback) {
        if (typeof callback === 'function') return callback(a, b);
        return false;
    }


    function cbRandom (a, b) {
        return Math.floor(Math.random()*(b-a+1)+a);
    }

    function cbPow  (a, b) {
        return Math.pow(a ,b);
    }

    function cbAdd (a, b) {
        return a + b;
    }

    console.log(mainFunc(2, 5, cbRandom ));
    console.log(mainFunc(10, 30, cbRandom ));
    console.log(mainFunc(2, 5, cbPow    ));
    console.log(mainFunc(2, 5, cbAdd));
    console.log(mainFunc(2, 5, 'not a function'));
