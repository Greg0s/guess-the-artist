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
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
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
  .switch-toggle {
  position: absolute;
  /* background-color: var(--background-color-primary); */
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}
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
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 

/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #2c3e50;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}
.switch-checkbox {
  display: none;
}
#dark, #light{
  display: none;
}
</style>