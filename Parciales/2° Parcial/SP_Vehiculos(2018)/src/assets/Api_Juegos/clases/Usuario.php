<?php
use Firebase\JWT\JWT as JWT;

class Usuario
{
    
    public $mail;
    public $nombre;
    public $tipo;
    public $clave;

    public function __construct($mail="",$nombre="",$tipo="",$clave="")
    {
        $this->tipo=$tipo;
        $this->mail=$mail;
        $this->nombre=$nombre;
        $this->clave=$clave;
    }

    public function Agregar()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (mail,nombre,tipo,clave)values(:mail,:nombre,:tipo,:clave)");
        $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
        $consulta->bindValue(':tipo',$this->tipo, PDO::PARAM_STR);
        $consulta->bindValue(':nombre',$this->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':clave',$this->clave, PDO::PARAM_STR);

        		
        return $consulta->execute();
    }

    public function Borrar()
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("
		delete 
		from usuarios 				
		WHERE mail=:mail");	
        $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
		$consulta->execute();
		return $consulta->rowCount();
    }
    
    public function TraerEste()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where mail=:mail and clave=:clave");
            $consulta->bindValue(':clave',$this->clave, PDO::PARAM_STR);
            $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
            $consulta->execute();
            // $var=$consulta->fetch(PDO::FETCH_ASSOC);
			return $consulta->fetch(PDO::FETCH_ASSOC);
    }
    
    public function verificarToken($request, $response, $next) {
        $token = ($request->getHeader("token")[0]);

        try {
            $todo= JWT::decode($token,"clave",array('HS256'));

        }
        catch(Exception $e) {
            $json = '{ "Error" : "Token inválido" }';
            return $response->withJson(json_decode($json), 409);
        }

        return $next($request, $response);
    }

}





?>