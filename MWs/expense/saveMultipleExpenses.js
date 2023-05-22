function name_is_wrong(name) {
    return name.length < 3 || name.length > 15;
}

function amount_is_wrong(amount) {
    //regex, adom
    let regex = /[0-9]+/i;
    if (!regex.test(amount)) return true;

    return amount < 0 || amount > 10000000;

}

function date_is_wrong(date) {
    //hajnali 1 van es nem tudom ilyeneket irok, nem tudom van e eletem
    let regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/i;
    return !regex.test(date);
}

function payed_is_wrong(date) {
    return false;
}

function payedto_is_wrong(date) {
    return false;
}


function good_date(input) {
    let regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/i;
    if (regex.test(input)) return input;
    return "";
}



/**
 * saveExpense
 * @param objectrepository
 * saves expense data to db (both create and edit)
 * @returns next
 */
module.exports = function (objectrepository) {

    return async function (req, res, next) {
        function user_by_name(name) {
            for (let i = 0; i < res.locals.users.length; i++) {
                let user = res.locals.users[i];

                // Compare the name of each user to the target name
                if (user.name === name) {
                    return user.id;
                }
            }
            return "-1";
        }


        if (typeof req.body.data === "undefined") {
            return next();
        }
        if(typeof res.locals.expense === "undefined"){
            res.locals.expense = new objectrepository.Expense;
        }

        console.log(req.body.data);
        let array = req.body.data.split(/\r?\n/);
        let firstrow = array[1].split(/\t/);
        let names = [];
        //let mostmar = false;
        firstrow.forEach(element => {

            /*if (mostmar)*/ if(element !== '') names.push(element);
            //if(element === "Érintett") mostmar = true;
        });
        for (let i = 2; i < array.length; i++) { //starts from 2, we are now not interested in the header rows
            await (async () => {
                let importerror = false;
                let curarray = array[i].split(/\t/);
                let curexpense = new objectrepository.Expense();
                curexpense.name = curarray[1];
                curexpense.date = good_date(curarray[3].replace(/\./g, "-"));
                curexpense.amount = parseInt(curarray[2].replace(/\.(?=[^.]*$)/g, "-"));

                //userfrom
                for (let k = 0; k < names.length; k++) {
                    if (curarray[4] === names[k]) {
                        let id = user_by_name(names[k]);
                        if (id === "-1") importerror = true;
                        else {
                            curexpense.userfrom = id;
                            //console.log("userfrom success");
                        }
                    }
                }

                //userto
                for (let j = 0; j < names.length; j++) {
                    if (curarray[5 + j] === "TRUE") {
                        let id = user_by_name(names[j]);
                        if (id !== "-1") {
                            curexpense.userto.push(id);
                            //console.log("userto success");
                        }
                    }
                }
                if (curexpense.userto.length === 0) importerror = true;
                console.log(curexpense);

/*                // save only if there is no import error
                if (!importerror) {
                    try {
                        await curexpense.save();
                    } catch (err) {
                        console.log("An error occurred while saving:", err);
                    }
                } else {
                    console.log("An import error occurred");
                }*/


                //save only if there is no import error
                if (!importerror) {
                    await new Promise((resolve, reject) => {
                        curexpense.save(err => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve();
                            }
                        });
                    });
                } else {
                    console.log("An error import occured");
                }
            })();

        }

        return res.redirect('/list');

    }
}