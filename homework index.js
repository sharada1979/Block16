
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//function second
/**
 * at the end of the script, you should return and log the string"your grand total is ${finalAmount}"
 * @param{Object} customer -detailsof acustomerand their prescription,subscription,and coupon
 */
function getTotal(customer){
    //APPLY DISCOUNT
    LetFinalAmount =ApplyDiscount(customer)
    //apply coupon
    finalAmount =applyCoupon(finalAmount,customer.coupon)
    //PRINT TOTAL
    //Console.log('your grand total is ${finalAmount}')
    return finalAmount


}
/**
 * If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
 * @param{Object} customer 
 * @returns {number} total
 * 
 */
function ApplyDiscount(customer) {
    //let total=multiply price per refill by number of refill total has been calculated.
    let total=customer.priceperrefill*customer.refills
    //if subscription
    if(customer.subscription){
        //total=(total -(discount/100))
        total-=(total*0.025)
    }returnTotal
    
}
/**
 * If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
 * @param {number} total
 * @param{boolean} has coupon
 */
function applyCoupon(total, hasCoupon) {
    //if has coupon{
        //subtract 10from total
        total-=10
        //return total
    }
    //business logic
    /**
     * prints the customername and grand totalin one line
     * @param {Object} customerObject this nested object has the customer's name as the key, andthe prescription info as it's value
     */
    function printTotal(customerObject) {
        //get the key(name) off of the parameter
        constName =Object.keys(customerObject)[0]
        //get the total
        const total =getTotal(customerObject[Name]);
        //print the nameand total together
        console.log('${name})=>"your grand total is ${total}"');
        
    }
    //finally function calls
    printTotal({timmy});
    printTotal({sarah});
    printTotal({rocky});



    



