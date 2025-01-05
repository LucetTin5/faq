export const reset = `
/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
};

/* 2. Remove default margin */
* {
margin: 0;
padding: 0;
};

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
};

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
};

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
};

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
};

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
};

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
};

/*
    9. Create a root stacking context
    */
   #root {
    isolation: isolate;
  }
  
  /* 10. Remove list styles */
  ul,
  ol {
    list-style: none;
  };
  
  /* 11. Remove anchor styles */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }

  /* 12. Remove button styles */
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;