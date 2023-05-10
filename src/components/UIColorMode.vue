<template>
  <div class="card">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
        <span id="dark">🌙</span>
        <span id="light">☀️</span>
      </label>
  </div>
</template>

<script>
export default {
    name: 'UIColorMode',
    mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
    },
    methods:{
        showDarkBtn(){
        document.getElementById("dark").style.display = "inline";
        document.getElementById("light").style.display = "none";
        },
        showLightBtn(){
          document.getElementById("dark").style.display = "none";
          document.getElementById("light").style.display = "inline";
        },
        toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
            this.setTheme("dark-theme");
            this.showLightBtn();
        } else {
            this.setTheme("light-theme");
            this.showDarkBtn();
        }
        },
        getMediaPreference() {
          if(localStorage.getItem("user-theme")){
            return localStorage.getItem("user-theme");
          }
          const hasDarkPreference = window.matchMedia(
              "(prefers-color-scheme: dark)"
          ).matches;
          if (hasDarkPreference) {
              return "dark-theme";
          } else {
              return "light-theme";
          }
        },
        setTheme(theme){
        if(theme == "light-theme"){
          this.showDarkBtn();
        }else{
          this.showLightBtn();
        }
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
        }
    },

}
</script>

<style>
.switch-label {
  /* for width, use the standard element-size */
  width: calc(var(--element-size) * 0.4); 

  /* for other dimensions, calculate values based on it */
  /* border-radius: var(--element-size); */
  /* border: calc(var(--element-size) * 0.025) solid var(--accent-color); */
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);

  align-items: center;
  /* background: var(--text-primary-color); */
  cursor: pointer;
  display: flex;
  position: absolute;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 

/* Define styles for the default root window element */
:root {
  --background-color-primary: white;
  --background-color-secondary: red;
  --accent-color: rgba(182,234,218, 0.5);/*B6EADA*/
  --text-primary-color: black;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #333333;
  --background-color-secondary: orange;
  --accent-color: rgba(182,234,218, 0.5);
  --text-primary-color: white;
}
.switch-checkbox {
  display: none;
}
#dark, #light{
  display: none;
}
.card{
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>