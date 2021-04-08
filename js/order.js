
function disable() { document.getElementById("inputAddress").disabled = true; } 
function enable() { document.getElementById("inputAddress").disabled = false; }

function calculate(pax)
      {
          var result = (pax * 3);
          document.getElementById("total").value = result;
      }