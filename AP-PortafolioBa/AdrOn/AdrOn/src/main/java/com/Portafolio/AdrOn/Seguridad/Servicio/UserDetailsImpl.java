
package com.Portafolio.AdrOn.Seguridad.Servicio;

import com.Portafolio.AdrOn.Seguridad.Entidad.Usuario;
import com.Portafolio.AdrOn.Seguridad.Entidad.UsuarioPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImpl implements UserDetailsService{
    @Autowired
    UsuarioServicio usuarioservicio;

    @Override
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
       Usuario usuario = usuarioservicio.getByNombreUsuario(nombreUsuario).get();
       return UsuarioPrincipal.build(usuario);
    }
    
}
