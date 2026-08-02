export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Hector Waldman · Apps 369</span>
        <span style={{ flex: 1 }} />
        <a className="textlink" href="https://www.linkedin.com/in/ektwr/" rel="me noopener" target="_blank">
          LinkedIn
        </a>
        <a className="textlink" href="https://github.com/EktwrW" rel="me noopener" target="_blank">
          GitHub
        </a>
        <a className="textlink" href="mailto:hector@hectorwaldmann.site">
          hector@hectorwaldmann.site
        </a>
      </div>
    </footer>
  );
}
