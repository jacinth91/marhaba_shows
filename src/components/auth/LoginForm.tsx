import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { LoginCredentials } from '../../types/auth';

export default function LoginForm() {
  const { login, isLoading, error } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (err) {
      // Error is handled by useAuth hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email"
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Enter your email"
        required
      />
      <Input
        label="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
        placeholder="Enter your password"
        required
      />
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      <Button type="submit" isLoading={isLoading}>
        Sign In
      </Button>
      <div className="text-center text-sm text-gray-600">
        <p>Demo credentials:</p>
        <p>Email: demo@example.com</p>
        <p>Password: password</p>
      </div>
    </form>
  );
}