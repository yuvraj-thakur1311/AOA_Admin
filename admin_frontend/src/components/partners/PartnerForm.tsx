// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

// import { partnerSchema, type PartnerFormValues } from "./partner.schema";

// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import SearchSelect from "../forms/SearchSelect";
// import RequiredLabel from "../forms/RequiredLabel";

// import { useCountries } from "../../hooks/useCountries";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "../ui/form";
// import { useStates } from "../../hooks/useStates";
// import { useCities } from "../../hooks/useCities";

// interface Props {
//   onSuccess: () => void;
// }

// export default function PartnerForm({ onSuccess }: Props) {
//   const countries = useCountries();
//   const states = useStates();
//   const city = useCities();

//   const form = useForm<PartnerFormValues>({
//     resolver: zodResolver(partnerSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phoneNumber: "",
//       practitionerType: "",
//       country: "",
//       state: "",
//       city: "",
//       street: "",
//       house_no: "",
//     },
//   });

//   const onSubmit = async (data: PartnerFormValues) => {
//     await axios.post("http://localhost:5000/partners", {
//       name: data.name,
//       email: data.email,
//       phoneNumber: data.phoneNumber,
//       practitionerType: data.practitionerType || null,
//       status: "Active",
//       country: data.country,
//       state: data.state,
//       city: data.city,
//       street: data.street || null,
//       house_no: data.house_no || null,
//     });

//     onSuccess();
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         {/* ---------- BASIC INFO ---------- */}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 <RequiredLabel>Partner name</RequiredLabel>
//               </FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 <RequiredLabel>Email</RequiredLabel>
//               </FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* ---------- PHONE ---------- */}
//         <FormField
//           control={form.control}
//           name="phoneNumber"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 <RequiredLabel>Phone number</RequiredLabel>
//               </FormLabel>
//               <FormControl>
//                 <Input {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="practitionerType"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Provider Type</FormLabel>
//                 <FormControl>
//                   <select
//                     {...field}
//                     className="h-9 w-full rounded-md border px-3"
//                   >
//                     <option value="">Select</option>
//                     <option>Lab</option>
//                   </select>
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </div>

//         {/* ---------- LOCATION ---------- */}
//         <Controller
//           control={form.control}
//           name="country"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>
//                 <RequiredLabel>Country</RequiredLabel>
//               </FormLabel>
//               <SearchSelect
//                 placeholder="Country"
//                 value={field.value}
//                 onChange={field.onChange}
//                 options={countries.map((c) => ({
//                   label: c,
//                   value: c,
//                 }))}
//               />
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="state"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   <RequiredLabel>State</RequiredLabel>
//                 </FormLabel>

//                 <SearchSelect
//                 placeholder="State"
//                 value={field.value}
//                 onChange={field.onChange}
//                 options={states.map((c) => ({
//                   label: c,
//                   value: c,
//                 }))}
//               />
             
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="city"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>
//                   <RequiredLabel>City</RequiredLabel>
//                 </FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="street"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Street</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="house_no"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>House No</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         {/* ---------- ACTION ---------- */}
//         <div className="flex justify-end">
//           <Button type="submit" style={{ background: "var(--brand-red)" }}>
//             Save partner
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { partnerSchema, type PartnerFormValues } from "./partner.schema";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SearchSelect from "../forms/SearchSelect";
import RequiredLabel from "../forms/RequiredLabel";

import { useCountries } from "../../hooks/useCountries";
import { useStates } from "../../hooks/useStates";
import { useCities } from "../../hooks/useCities";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";

interface Props {
  onSuccess: () => void;
}

export default function PartnerForm({ onSuccess }: Props) {
  const countries = useCountries();

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      practitionerType: "",
      country: "",
      state: "",
      city: "",
      street: "",
      house_no: "",
    },
  });

  /* ---------- WATCH DEPENDENCIES ---------- */
  const selectedCountry = form.watch("country");
  const selectedState = form.watch("state");

  /* ---------- DEPENDENT DATA ---------- */
  const states = useStates(selectedCountry);
  const cities = useCities(selectedCountry, selectedState);

  /* ---------- RESET CASCADE ---------- */
  // reset state & city when country changes
  if (!selectedCountry && form.getValues("state")) {
    form.setValue("state", "");
    form.setValue("city", "");
  }

  // reset city when state changes
  if (!selectedState && form.getValues("city")) {
    form.setValue("city", "");
  }

  const onSubmit = async (data: PartnerFormValues) => {
    await axios.post("http://localhost:5000/partners", {
      ...data,
      practitionerType: data.practitionerType || null,
      street: data.street || null,
      house_no: data.house_no || null,
      status: "Active",
    });

    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* ---------- BASIC INFO ---------- */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabel>Partner name</RequiredLabel>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabel>Email</RequiredLabel>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabel>Phone number</RequiredLabel>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- PROVIDER TYPE ---------- */}
        <FormField
          control={form.control}
          name="practitionerType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provider Type</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="h-9 w-full rounded-md border px-3"
                >
                  <option value="">Select</option>
                  <option value="Lab">Lab</option>
                </select>
              </FormControl>
            </FormItem>
          )}
        />

        {/* ---------- LOCATION ---------- */}
        <Controller
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <RequiredLabel>Country</RequiredLabel>
              </FormLabel>
              <SearchSelect
                placeholder="Country"
                value={field.value}
                onChange={(val) => {
                  field.onChange(val);
                  form.setValue("state", "");
                  form.setValue("city", "");
                }}
                options={countries.map((c) => ({
                  label: c,
                  value: c,
                }))}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          {/* ---------- STATE ---------- */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <RequiredLabel>State</RequiredLabel>
                </FormLabel>
                <SearchSelect
                  placeholder="State"
                  value={field.value}
                  onChange={(val) => {
                    field.onChange(val);
                    form.setValue("city", "");
                  }}
                  options={states.map((s) => ({
                    label: s,
                    value: s,
                  }))}
                  disabled={!selectedCountry}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ---------- CITY ---------- */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <RequiredLabel>City</RequiredLabel>
                </FormLabel>
                <SearchSelect
                  placeholder="City"
                  value={field.value}
                  onChange={field.onChange}
                  options={cities.map((c) => ({
                    label: c,
                    value: c,
                  }))}
                  disabled={!selectedState}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ---------- ADDRESS ---------- */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="house_no"
            render={({ field }) => (
              <FormItem>
                <FormLabel>House No</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* ---------- ACTION ---------- */}
        <div className="flex justify-end">
          <Button type="submit" style={{ background: "var(--brand-red)" }}>
            Save partner
          </Button>
        </div>
      </form>
    </Form>
  );
}
