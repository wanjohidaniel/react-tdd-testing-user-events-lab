function App() {
  return (
    <main>
      <h1>Hi, I'm _______</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="technology">Technology</label>
        <input type="checkbox" id="technology" name="interests" />

        <label htmlFor="science">Science</label>
        <input type="checkbox" id="science" name="interests" />

        <label htmlFor="art">Art</label>
        <input type="checkbox" id="art" name="interests" />

        <button type="submit">Submit</button>
      </form>

      {/* Success Message */}
      <p id="successMessage" style={{ display: 'none' }}>Form submitted successfully</p>
    </main>
  );
}

export default App;
