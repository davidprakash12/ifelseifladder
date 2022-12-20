<!DOCTYPE html>

<HTML>
    <HEAD>
        <SCRIPT>
            function Calculate(){
                var sa=parseInt(document.getElementById("txta").value);
                var disc=0.0;
                var np=0.0;
                if(sa>0){
                    if(sa<=5000){
                        disc=sa*0.05;
                    } 
                    else if(sa<=15000){
                        disc=sa*0.15;
                    }
                    else if(sa<=30000){
                        disc=sa*0.25;
                    }
                    else{
                        disc=sa*.4;
                    }
                      
                    document.getElementById("txtb").value=""+disc;
                    var np=sa-disc;
                    document.getElementById("txtc").value=""+np;
                }
                else{
                    alert('Invalid Sale Amount')
                }
                
            }
        </SCRIPT>
    </HEAD>
    <BODY>
        <h2>Nested Id : False ladder</h2>
        <hr />
        <table>
            <tr>
                <td>
                    <label>Enter Sale Amount:</label>
                </td>
                <td>
                    <input type="text" name="txta" id="txta" />
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;
                </td>
                <td>
                    <input type="button" value="Calculate Discount" onclick="Calculate()" />
                </td>
            </tr>
             <tr>
                <td>
                    <label>Discount</label>
                </td>
                <td>
                    <input type="text" name="txtb" id="txtb" readonly />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Net Pay</label>
                </td>
                <td>
                    <input type="text" name="txtc" id="txtc" readonly />
                </td>
            </tr>
        </table>
    </BODY>
</HTML>