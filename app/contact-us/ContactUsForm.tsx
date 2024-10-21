"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { data } from "@/data/services";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export default function ContactUsForm() {
  const [department, setDepartment] = useState("info");
  const [service, setService] = useState<string | undefined>(
    "Transit Services"
  );

  const [name, setName] = useState<string>();
  const [company, setCompany] = useState<string>();
  useEffect(() => {
    if (department === "shipping") {
      setService("Crew Services");
    }
  }, [department]);
  const getServices = () => {
    if (department === "shipping") {
      return data.filter((e) => e.title === "Crew Services");
    } else {
      return data;
    }
  };

  const submitForm = () => {
    const body = `My name is ${name}, and I represent ${company}. I am reaching out to inquire about the ${service}.`;
    const subject = service;
    let account = "info@yasa-international.com";

    if (department == "ceo") {
      account = "ceo@yasa-international.com";
    } else if (department == "info") {
      account = "info@yasa-international.com";
    } else if (department == "shipping") {
      account = "shipping@yasa-international.com";
    } else if (department == "operation") {
      account = "operation@yasa-international.com";
    }
    const link = `mailto:${account}?subject=${subject}&body=${body}`;
    window.open(link, "_blank", "noreferrer");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className='mb-4'>
          <Label>Name</Label>
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-2'
            placeholder='Enter your name'
          />
        </div>

        <div className='mb-4'>
          <Label>Company</Label>
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className='mt-2'
            placeholder='Enter your company name'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='department'>Department</Label>
          <Select value={department} onValueChange={(e) => setDepartment(e)}>
            <SelectTrigger className='mt-2' id='department'>
              <SelectValue placeholder='Select the department' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='ceo'>CEO</SelectItem>
              <SelectItem value='operation'>Operation</SelectItem>
              <SelectItem value='info'>Information</SelectItem>
              <SelectItem value='shipping'>Shipping</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='mb-4'>
          <Label htmlFor='service'>Service</Label>
          <Select value={service} onValueChange={(e) => setService(e)}>
            <SelectTrigger className='mt-2' id='service'>
              <SelectValue placeholder='Select the service' />
            </SelectTrigger>
            <SelectContent>
              {getServices().map((e, i) => {
                return (
                  <SelectItem key={i + 1} value={e.title}>
                    {e.title}
                  </SelectItem>
                );
              })}
              <SelectItem value='other'>Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className='min-w-[150px]' type='submit'>
          Send
        </Button>
      </form>
    </>
  );
}
