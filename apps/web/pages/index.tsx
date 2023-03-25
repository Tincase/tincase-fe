import { NavBar, Button } from '@tincase/ui';
import { TinCaseProvider } from '@tincase/provider';

export default function Web() {
  return (
    <TinCaseProvider>
      <header>
        <NavBar />
      </header>
      <div>
        <h1>Web</h1>
        <Button>버튼</Button>
      </div>
    </TinCaseProvider>
  );
}
