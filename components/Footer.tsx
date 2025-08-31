import { FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t">
      <div className="container py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 className="font-semibold mb-2">À propos</h3>
          <p className="text-sm text-stone">
            RG News — Informations, Sports, Musique, Événements et Interviews
            pour la Guinée et sa diaspora.
          </p>
          <p className="text-xs text-stone mt-2">
            © {new Date().getFullYear()} RG News. Tous droits réservés.
          </p>
        </div>
        <div className="md:justify-self-end">
          <h3 className="font-semibold mb-2">Suivez-nous</h3>
          <div className="flex gap-3">
            <a
              aria-label="TikTok"
              href="https://www.tiktok.com/@robotguineen?_t=ZP-8zLRNYPP8sZ&_r=1"
              target="_blank"
              rel="noreferrer"
              className="card p-3 hover:bg-gray-50 transition-colors"
            >
              <FaTiktok size={20} />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/share/1GUa9dEAD4/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="card p-3 hover:bg-gray-50 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              aria-label="YouTube"
              href="https://youtube.com/@robot5319?si=mDyONJhGjuzYe9mZ"
              target="_blank"
              rel="noreferrer"
              className="card p-3 hover:bg-gray-50 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
