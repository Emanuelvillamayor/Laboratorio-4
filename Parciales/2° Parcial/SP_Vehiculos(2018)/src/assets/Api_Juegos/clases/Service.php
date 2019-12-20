<?php
include "AccesoDatos.php";
class Service
{
    private $mail;
    private $hora;
    private $fecha;
    private $id;
    public function __construct($mail="",$hora="",$fecha="")
    {
        $this->mail=$mail;
        $this->hora=$hora;
        $this->fecha=$fecha;
    }

    public function Agregar()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into servicios (mail,hora,fecha)values(:mail,:hora,:fecha)");
        $consulta->bindValue(':mail',$this->mail,  PDO::PARAM_STR);
        $consulta->bindValue(':hora',$this->hora,  PDO::PARAM_STR);
        $consulta->bindValue(':fecha',$this->fecha,  PDO::PARAM_INT);
        		
        return $consulta->execute()>0;
    }

    
    public static function Traer($mail)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT hora , fecha from servicios where mail= :mail");
        $consulta->bindValue(':mail',$mail,  PDO::PARAM_STR);
        $consulta->execute();
        
		return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }


}





?>