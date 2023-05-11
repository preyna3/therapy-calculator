import { ref } from 'vue'
export const useCurrentDateTime = () => {
    // create a reactive date object 
    const date = ref(new Date())
    // update the date every second  
    setInterval(() => {
      date.value = new Date()
    }, 1000)
    // return the date object  
    return { date }
  }

  export const updateTime = () => {
    document.getElementById("time1").value = document.getElementById("time0").value + "00:15";
    document.getElementById("time2").value = document.getElementById("time0").value + "00:30";
    document.getElementById("time3").value = document.getElementById("time0").value + "00:45";
    document.getElementById("time4").value = document.getElementById("time0").value + "01:00";
    return 0
  }
