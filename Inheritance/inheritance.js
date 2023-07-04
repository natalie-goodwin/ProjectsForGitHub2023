/*Inheritance: 2 Classes may have a lot of shared code; 
you could move the shared code into a parent class 
and have the other classes share from it; common code is 
in one place and changed only in that place*/

/*One class sends promotional notifications, and the other sends
collections notifications for overdue accounts; but they each share
a lot of code as below in first example */

// class PromotionSender {
//     constructor() {

// }

// sendNotification(notification) {
//     console.log('Sending: ' + notification);
// }

// findUserWithStatus(status) { users meet a certain promotional status
//     let users = getUsers(status);
//     return users;
// }

// calculateDiscount(status) { users get a discount here
//     if (status === 'Gold') {
//             return .3;        
//         } else if (status === 'Silver') {
//             return .15;
//         }
//         return 0;
//     } these methods give a notification and send a notifcation
// }

// class CollectionsSender {
//     constructor() {

//     }

//     sendNotification(notification){ 
//         console.log('Sending: ' + notification);          
//     }

//    findUserWithStatus (status) {
//     let users = getUsers(status);
//     return users;
//    }

//     calculateFee(status) {
//         if (status === 'OVERDUE') {
//             return 10; 
//         } else if (status === 'DELINQUENT') {
//             return 25; 
//         }
//         return 5;
//     }
//  }
/*the above 2 classes have a lot of similar overlapping code;
this is redundant */

/*Below is a cleaned up version in which we create a 
class NotificationSender that holds all common data and PromotionSender
class and CollectionsSender class each extend the class NotificationSender */

class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    
    findUserWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender  extends NotificationSender {
    constructor(status) { /* 'extends' is used to inherit from another class */
        super(status); /*'super' refers to the parent class, and when
        followed by parentheses it refers to the parent class constructor */
}

calculateDiscount(status) {
    if (status === 'Gold') {
            return .3;        
        } else if (status === 'Silver') {
            return .15;
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender {
    constructor(status) { /* 'extends' is used to inherit from another class */
        super(status); /*'super' refers to the parent class, and when
        followed by parentheses it refers to the parent class constructor */
    }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10; 
        } else if (status === 'DELINQUENT') {
            return 25; 
        }
        return 5;
    }
 }

 let collectionsSender = new CollectionsSender('OVERDUE');
 collectionsSender.sendNotification('This is a test collections notification.');

 let promotionSender = new PromotionSender('Silver')
 promotionSender.sendNotification('This is a test promotion notification.')