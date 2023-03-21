
package com.Portafolio.AdrOn.Seguridad.Servicio;

import com.Portafolio.AdrOn.Seguridad.Entidad.Usuario;
import com.Portafolio.AdrOn.Seguridad.Repositorio.iUsuarioRepositorio;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioServicio {
    @Autowired
    iUsuarioRepositorio iusuarioRepositorio;
    
    public Optional<Usuario>  getByNombreUsuario(String nombreUsuario){
        return iusuarioRepositorio.findByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreUsuario(String nombreUsuario){
        return iusuarioRepositorio.existsByNombreUsuario(nombreUsuario);
    }
    public boolean existsByEmail(String email){
        return iusuarioRepositorio.existsByEmail(email);
    }
    
    public void save(Usuario usuario){
        iusuarioRepositorio.save(usuario);
    }
}
