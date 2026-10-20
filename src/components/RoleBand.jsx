import { persona } from '../data/site'
import { Flower } from './Icons'

const COPIES = 4

/**
 * Franja con los roles, en marquesina. El primer grupo es el real; las copias
 * sólo existen para que el bucle no tenga huecos y se ocultan a los lectores
 * de pantalla. Va arriba del hero y al pie del cierre.
 */
export default function RoleBand({ footer = false }) {
  return (
    <div
      className={footer ? 'role-band role-band--footer' : 'role-band'}
      role="group"
      aria-label="Roles"
    >
      <div className="marquee">
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul key={copy} className="marquee__group" aria-hidden={copy > 0 ? 'true' : undefined}>
            {persona.roles.map((role) => (
              <li key={role}>
                <span>{role}</span>
                <Flower className="marquee__flower" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
