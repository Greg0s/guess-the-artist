<template>
  <div class="theme-btn">
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
  cursor: pointer;
  position: absolute;
  z-index: 1;
} 

.theme-btn{
  position: absolute;
  top: 1.3rem;
  right: 4rem;
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: white;
  --background-color-secondary: rgba(0, 0, 0, 0.2);
  --accent-color: rgba(182,234,218, 0.5);/*B6EADA*/
  --text-primary-color: black;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #333333;
  --background-color-secondary: rgba(255, 255, 255, 0.4);
  --accent-color: rgba(182,234,218, 0.5);
  --text-primary-color: white;
}

</style>