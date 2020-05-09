function validateForm() {
    var _name = document.forms["iletisim"]["name"].value;
    var email=document.forms["iletisim"]["email"].value;
    var _surname=document.forms["iletisim"]["surname"].value;
    var _comment=document.forms["iletisim"]["comment"].value;
    var sayac=0;
    for(var i=0;i<email.length;i++)
    {
        if(email[i]=='@'||email[i]=="")
        {
            sayac++;
        }
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
    if(_surname=="")
    {
        alert("Surname must be filled correctly")
        return false;
    }
    if(_comment=="")
    {
        alert("Comment area must be filled")
        return false;
    }
    if(sayac==1 && _name!="" && _surname!="" && _comment!="")
    {
        return true;
    }
    
  }

  function loginKontrol()
  {
      var email=document.forms["login"]["email"].value;
      var password=document.forms["login"]["password"].value;
      var sayac=0;
      for(var i=0;i<email.length;i++)
      {
          if(email[i]=="" || email[i]=='@')
          {
              sayac++;
          }
          
      }
      if (sayac==1 && password!="")
      {
            return true;
      }

      if (sayac!=1)
      {
          alert("E-Mail must be filled correctly");
          return false;
      }
      if (password=="")
      {
          alert("Password must be filled correctly");
          return false;
      }
  }
