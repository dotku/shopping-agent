"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { FormEvent, useState } from "react";

import { supabase } from "@/app/services/supabase";

interface ShoppingRequestData {
  title: string;
  detail?: string;
  client_name: string;
  client_email?: string;
  client_phone?: string;
  referral?: string;
  if_express: boolean;
}

const initialData: ShoppingRequestData = {
  title: "",
  detail: "",
  client_name: "",
  client_email: "",
  client_phone: "",
  referral: "",
  if_express: false,
};

export default function ShoppingAgent() {
  const [data, setData] = useState<ShoppingRequestData>(initialData);

  const handleDataChange =
    (field: string) => (e: FormEvent<HTMLInputElement>) => {
      console.log(
        "e.currentTarget.value",
        e.currentTarget.value,
        data["if_express"]
      );
      if (field === "if_express") {
        setData({
          ...data,
          [field]: !data["if_express"],
        });
      } else {
        setData({
          ...data,
          [field]: e.currentTarget.value,
        });
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("(handleSubmit) data", data);
    const { data: supabaseData, error } = await supabase
      .from("shopping_request")
      .insert([data])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    setData(initialData);

    console.log("data", supabaseData);
  };

  return (
    <>
      <header className="mb-3">
        <h3 className="text-3xl">shopping request</h3>
        <p>our shopping covers US and China purchase</p>
      </header>
      <form onSubmit={handleSubmit}>
        <Input
          isRequired
          className="mb-3"
          label="title"
          placeholder="what do you want to buy?"
          value={data["title"]}
          onChange={handleDataChange("title")}
        />
        <Textarea
          isRequired
          className="mb-3"
          label="detail"
          placeholder="tell me what exactly you want to purchase"
          value={data["detail"]}
          onChange={handleDataChange("detail")}
        />
        <Input
          isRequired
          className="mb-3"
          label="name"
          placeholder="your contact information"
          value={data["client_name"]}
          onChange={handleDataChange("client_name")}
        />
        <Input
          className="mb-3"
          label="email"
          type="email"
          placeholder="your email information"
          value={data["client_email"]}
          onChange={handleDataChange("client_email")}
        />
        <Input
          className="mb-3"
          label="phone"
          placeholder="your phone number"
          value={data["client_phone"]}
          onChange={handleDataChange("client_phone")}
        />
        <Input
          className="mb-3"
          description="both of you would get $5 discount"
          label="referral"
          placeholder="who refere you to our service?"
          value={data["referral"]}
          onChange={handleDataChange("referral")}
        />
        <div className="mb-3">
          <Checkbox
            defaultSelected
            isSelected={data["if_express"]}
            onClick={handleDataChange("if_express")}
          >
            Express +$100 (24hr respond time; 2~5 days without express)
          </Checkbox>
        </div>
        <Button className="mb-3" type="submit">
          Submit
        </Button>
      </form>
      <div className="text-small text-left">
        <div className="mb-3">
          <h5 className="text-xl">SOP</h5>
          <ol className="list-decimal px-6">
            <li>
              Buyer submit request form, eg COACH Brooklyn Shoulder Bag 28
            </li>
            <li>
              Agent return the product pricing quota, eg $295 + tax ($25.44) +
              service fee (10% ~ $32.04) = $352.48
            </li>
            <li>Buyer pay off the fee with delivery information</li>
            <li>Agent return the shipping cost with service fee (10%)</li>
            <li>Buyer pay the shipping fee</li>
            <li>Agent ship the product</li>
          </ol>
        </div>
        <div>
          <h5 className="text-xl">Terms</h5>
          <ul className="list-disc px-6">
            <li>
              The service fee is not refundable, we could help on refund items
              and support on tracking the lost if neccessary, but if the store
              required restocking fee, it will be dedcucted from your refund.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
