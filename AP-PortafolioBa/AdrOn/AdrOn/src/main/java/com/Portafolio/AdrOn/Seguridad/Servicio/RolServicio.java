
package com.Portafolio.AdrOn.Seguridad.Servicio;

import com.Portafolio.AdrOn.Seguridad.Entidad.Rol;
import com.Portafolio.AdrOn.Seguridad.Enums.RolNombre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Portafolio.AdrOn.Seguridad.Repositorio.iRolRepositorio;
import jakarta.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolServicio {
    @Autowired
    iRolRepositorio irolRepositorio;
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolRepositorio.findByRolNombre(rolNombre);
    }
    public void save(Rol rol){
        irolRepositorio.save(rol);
    }
    
}
