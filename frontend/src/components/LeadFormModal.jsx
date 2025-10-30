import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const LeadFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We will contact you soon.');
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Request a TriggerDeliver demo</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name*</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-14 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name*</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-14 text-base"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 text-base"
            />
          </div>

          {/* Country and Phone */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1 space-y-2">
              <Label htmlFor="country">Country*</Label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger className="w-full h-14">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Spain (España) +34</SelectItem>
                  <SelectItem value="us">United States +1</SelectItem>
                  <SelectItem value="uk">United Kingdom +44</SelectItem>
                  <SelectItem value="de">Germany +49</SelectItem>
                  <SelectItem value="fr">France +33</SelectItem>
                  <SelectItem value="it">Italy +39</SelectItem>
                  <SelectItem value="pt">Portugal +351</SelectItem>
                  <SelectItem value="nl">Netherlands +31</SelectItem>
                  <SelectItem value="be">Belgium +32</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="phone">Phone*</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-14 text-base"
              />
            </div>
          </div>

          {/* Privacy Policy Text */}
          <div className="text-sm text-gray-600 leading-relaxed">
            TriggerDeliver needs the contact information you provide to contact you about our platform and services.
            You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as
            our privacy practices and commitment to protecting your privacy, check out our{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-700">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadFormModal;
