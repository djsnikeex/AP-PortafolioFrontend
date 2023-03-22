package com.Portfolio.AdrOnores.Security.Repository;

import com.Portfolio.AdrOnores.Security.Entity.Rol;
import com.Portfolio.AdrOnores.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
