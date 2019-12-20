<?php
include "AccesoDatos.php";
class Vehiculo
{
    private $patente;
    private $color;
    private $marca;
    private $km;
    private $tipo;
    public function __construct($patente="",$color="",$marca="",$tipo="",$km="")
    {
        $this->patente=$patente;
        $this->color=$color;
        $this->marca=$marca;
        $this->km=$km;
        $this->tipo=$tipo;
    }

    public function Agregar()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into vehiculos (patente,color,marca,tipo,km)values(:patente,:color,:marca,:tipo,:km)");
        $consulta->bindValue(':patente',$this->patente,  PDO::PARAM_STR);
        $consulta->bindValue(':color',$this->color,  PDO::PARAM_STR);
        $consulta->bindValue(':marca',$this->marca,  PDO::PARAM_STR);
        $consulta->bindValue(':tipo',$this->tipo,  PDO::PARAM_STR);
        $consulta->bindValue(':km',$this->km,  PDO::PARAM_INT);
        		
        return $consulta->execute()>0;
    }

    
    public function Traer()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT patente from vehiculos");
        $consulta->bindValue(':mail',$this->mail,  PDO::PARAM_STR);
        $consulta->execute();
        
		return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }


}





?>