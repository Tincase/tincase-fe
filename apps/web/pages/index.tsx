import { Button } from "@tincase/ui";
import { TinCaseProvider } from "@tincase/provider";

export default function Web() {
  return (
    <TinCaseProvider>
      <div>
        <h1>Web</h1>
        <Button />
      </div>
    </TinCaseProvider>
  );
}
