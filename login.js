function validateForm() {
    var _name = document.forms["iletisim"]["name"].value;
    var email=document.forms["iletisim"]["email"].value;
    var sayac=0;

    for(var i=0;i<email.length;i++)
    {
        if(email[i]=='@'||email[i]=="")
        {
            sayac++;
        }
    }
    if(sayac==1 && _name!="")
    {
        return true;
    }
    
    if(sayac!=1)
    {
        alert("E-Mail must be filled correctly");
        return false;
    }
    
    if(_name=="")   
    {
        alert("Name must be filled correctly");
        return false;
    }

  }