<template>
    <div class="box">
      
      <div class="side-bar">
        <img src="/Users/lying/Desktop/ATNWeb/src/assets/atn.jpg" alt="Example image" class="sidebar-image">
        
            
        <div class="box-container">
            <div class="inner-box">仪表盘</div>
            <div class="inner-box">交易信息</div>
        </div>

        <div class="scroll-content">
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style scoped>
  
  .box {
    width: 1400px;
    height: 700px;
    background-color: #f5f5f5;
    position: fixed;
    left: 20px;
    top: 50%; 
    transform: translateY(-50%); 
    display: flex;
    justify-content: flex-start; 
    border-radius: 15px;
  }
  
  
  .side-bar {
    width: 200px; 
    height: 100%;
    background-color: #ffffff;
    position: relative; 
    border-right: 1px solid #ccc;
    overflow-y: auto; 
    border-radius: 15px;
    box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.3); 
    flex-direction: column;
    align-items: center;

  }

  .sidebar-image{
    width: 200px;
    height: auto;
    border-radius: 5px;

  }

  .box-container {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    width: 100%; 
    margin: 10px 0; 
    background-color: #ffffff;
    
  }
 
  .inner-box{
    width: 160px;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;





  }




  
  
  .scroll-content {
    height: 1000px; 
    padding: 10px;
  }
  
  .scroll-content p {
    margin: 10px 0;
  }
  </style>
  