(function (global,$) {

  //here is the main function that gets called and creates our object by returning the new object and the function constructor
  var Greetr=function (firstname,lastname,language) {
    return new Greetr.init(firstname,lastname,language);
  };
  //lets set some data that we do not want to expose to the outside world and also use closures so that methods nside the objects can use it

   //here i am seeting the languages im gonna use
   var languages=['en','hn'];

   //here our the greetings realted to the languages
   var greetings={
     en:"Hello",
     hn:"kaisa hai"
   };

   //here are formal greetings
   var formalGreetings={
     en:"greetings",
     hn:"namaskar"
   };

   // here is the logong of the messages in the different langauges

   var logmessages={
     en:"logged in",
     hn:"ghuse we ho"
   };

   //this is the mian part where we our setting up the methods in the prototype of the Greetr function
   Greetr.prototype={
     //this method will validate the language as if exists or not
      validate: function () {
        console.log(this);
          if(languages.indexOf(this.language) === -1) {
            throw "language not supported ";
          }
      },
      //this will provide a informal greeting
      greeting :function () {
        return  greetings[this.language] +' '+ this.firstname + '!';
      },

      //this will provide the formal fgreeting

      formalGreeting: function () {
        return formalGreetings[this.language] + " " + this.firstname + '!';
      },

      //this will return the fullname
     fullname : function () {
       return this.firstname + ' ' + this.lastname;
     },

     //this is the main function that logs the greeitng and takes argumnet to send out formal or informal greeting

     greet : function (formal) {
       var msg;
       if(formal) {
         msg=this.formalGreeting();
       }
       else {
         msg=this.greeting();
       }

       if(console ) {
         console.log(msg);
       }

       return this;
     },

     //this is the logger method
     logg: function () {
       if(console) {
         console.log(logmessages[this.language] + ' ' +this.lastname);
       }
       return this;
     },

     //this is the library embedded method that chnages the innerhtml ofe the elemnt selcted according to the greet

     innerGreet: function (selector,formal) {
       if(!$) {
         throw "sorry the library is not loaded";
       }
       else {
         var msg;
         if(!selector) {
           throw "selector is npt selected";
         }
         else {
           if(formal) {
             msg=this.formalGreeting();
           }

           else {
             msg=this.greeting();
           }
           console.log(msg);
           $(selector).html(msg);
         }
       }
     }
   };

   //here we are actually using the constructor function to make the object and initilaises it
   Greetr.init=function (firstname,lastname,language) {
      this.firstname=firstname || '';
      this.lastname=lastname || '';
      this.language=language || 'en';

      this.validate();
    };

    //here we are making saure ther prototype of the constructor function points to the prototypee of the GReetr function so we can define all our methods in there only
    Greetr.init.prototype=Greetr.prototype;

    //the piece of code that is making the variable in the winfow object to make accessible to every file
    global.Greetr=global.G$=Greetr;

}(window,$));
