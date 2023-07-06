# Train-Schedule-App
App.js:

Entry point of the application.
Sets up routing using react-router-dom.
Renders the HomePage, TrainPage, RegisterForm, AuthForm, and NavBar components based on the specified routes.
HomePage.js:

Displays a list of train schedules.
Fetches train data from an API using axios in the useEffect hook.
Renders train information, including train name, number, departure time, seats available, price, and delay.
TrainPage.js:

Displays details of a specific train.
Fetches train data for a particular train number from an API using axios in the useEffect hook.
Renders train information, including train name, number, departure time, seats available, price, and delay.
Uses state and conditional rendering to handle loading state.
RegisterForm.js:

Provides a form for company registration.
Handles form submission and sends the registration data to the API using axios.
Uses state and controlled inputs to manage form values.
AuthForm.js:

Provides a form for user authorization.
Handles form submission and sends the authorization data to the API using axios.
Uses state and controlled inputs to manage form values.
Displays the access token received from the API upon successful authorization.
NavBar.js:

Displays a navigation bar with links to different pages/routes.


![Screenshot (166)](https://github.com/AshwinSuperNova/Train-Schedule-App/assets/126334039/9629cdd7-7819-433b-9cc4-4b5882f7bdbf)

![Screenshot (165)](https://github.com/AshwinSuperNova/Train-Schedule-App/assets/126334039/407de561-b51c-4455-bf80-d009f14ab604)

![Screenshot (164)](https://github.com/AshwinSuperNova/Train-Schedule-App/assets/126334039/5496761b-fbc6-4d06-b6a9-adf4c137098b)

![Screenshot (163)](https://github.com/AshwinSuperNova/Train-Schedule-App/assets/126334039/1b73b518-e0c3-49f9-bf7a-779ae3911a13)

