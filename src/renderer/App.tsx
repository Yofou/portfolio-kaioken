import { PageContext } from "vike/types"
import { PageShell } from "./PageShell"
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';

export function App({ pageContext }: { pageContext: PageContext }) {
  const { Page, data = {} } = pageContext
  return (
    <PageShell pageContext={pageContext}>
      <Page {...data} />
    </PageShell>
  )
}
