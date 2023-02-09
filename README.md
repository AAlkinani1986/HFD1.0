# HFD1.0
Health First Deakin is a dietitian app where the user can have a healthy diet

# Project Details
Application main aim is to help paitents getting a better guidence regarding their eating habbits and giving a general tip about healthly food products
Our application consist of 3 modules Clinic, Patient and Doctors 
**Patients** can view the diet consult the doctor and book appointments with clinic
**Clinic** is a mediator between doctor and profile which can connect doctor to patients
**Doctor** can consult with the patients and suggest them with some diets

# How to run the application?
Steps
1) Open Visual code terminal from github
2) Install dependencies with **npm i**
3) After getting the dependencies run the command **npm start** 
4) Open browser enter url :- http://localhost:3000/
![Login Page](./public/images/Login.jpg)
5) if **New User**
    1) click on register add user details
    2) Do not forget to add your occupation (Patient, Doctor,Clinic)
    3) User needs to be verfied by the Admin 
    4) After users are verfied they can navigate to desired Page
5) else **Existing User**
    1) Add your Username and Password 
    2) Click login and get to your desired occupation
6) If you are a **New Patient** you will need to create a account with HFD link:- http://localhost:3000/patient/registration
   ![Patient Register Page](./public/images/Patientregis.png)

   If your have a **New Clinic** you will need to create a account with HFD link:- http://localhost:3000/clinic/registration
      ![Clinic Register Page](./public/images/Clinic%20register.png)

   If you are a **New Doctor** you will need to create a account with HFD link:- http://localhost:3000/doctor/registration
      ![Doctor Register Page](./public/images/doc%20regis.png)

7) Existing Users will be navigated to there desired profile page where they can edit there deatils
8) Patients can also view the recipes and serach for several food items with viewing their health benenfits
      ![Recipe Page](./public/images/recp.png)
9) Patients can also add thier recipes with Ingredients so that others can have benefit from it
       ![Plan your diet Page](./public/images/plan.png)


# Test Case
We implemented 22 test case with your project
Steps
1) Open terimal Start your npm server with npm start 
2) Open new terminal add npm test
3) you can see test cases running

Test case consist of Admin login , (Patients, Doctor and Clinics) Registration Pages  

   



