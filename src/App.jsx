import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <h1>Profile Showcase</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "0 -16px",
        }}
      >
        <Profile
          name="John Smith"
          occupation="Professor"
          funFact="Loves to play violin."
        />
        <Profile
          name="Jane Doe"
          occupation="Chef"
          funFact="Plays pickelball on the weekends."
        />
        <Profile
          name="Mark Johnson"
          occupation="Cardiologist"
          funFact="Loves playing Pokemon."
        />
      </div>
    </div>
  );
};

export default App;
