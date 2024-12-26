import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function OnboardingRoute() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to Cal<span className="text-primary">Marshal</span>
          </CardTitle>
          <CardDescription>
            We need the following information to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-5">
            <div className="grid gap-y-2">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
            </div>
            <div className="grid gap-y-2">
                <Label>Username</Label>
                <div className="flex rounded-md">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">adnmemos.com/</span>
                    <Input placeholder="example-user-1" className="rounded-l-none"/>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
