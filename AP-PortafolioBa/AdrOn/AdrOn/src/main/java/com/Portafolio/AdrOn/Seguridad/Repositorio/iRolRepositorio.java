
package com.Portafolio.AdrOn.Seguridad.Repositorio;

import com.Portafolio.AdrOn.Seguridad.Entidad.Rol;
import com.Portafolio.AdrOn.Seguridad.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepositorio extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
