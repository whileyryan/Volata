<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>La Volata</title>
<link rel="stylesheet" type="text/css" href="CSS/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="CSS/index.css">
<link rel="stylesheet" type="text/css" href="CSS/home.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="JS/bootstrap.min.js"></script>
<script src="JS/main.js"></script>

</head>

<body>
<div class='navbar-default'>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/"><img src='http://i.imgur.com/QeUaEiL.jpg'></a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav ">
          <table style="width:100%; margin-left:47%;">
            <tr>
              <td><li><h3><a href='#contact' class='col-md-12 volata-button'>contact & hours</a></h3></li></td>
              <td><li><h3><a href='#menu' class='col-md-4'>menu</a></h3></li></td>
              <td><li><h3><a href='#drinks' class='col-md-12'>beer & wine</a></h3></li></td>
              <td><li><h3><a href='#about' class='col-md-4'>about</a></h3></li></td>
            </tr>
          </table>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid --> 
  </nav>
</div>

<?php include 'contact.html'; ?>
<?php include 'menu.html'; ?>
<?php include 'drinks.html'; ?>
<?php include 'about.html'; ?>

</body>
</html>
