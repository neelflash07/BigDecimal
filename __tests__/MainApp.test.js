import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainApp from '../src/app/page';
import { ThemeProvider } from '../src/context/ThemeContext';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Moon: () => <div data-testid="icon-moon" />,
  Sun: () => <div data-testid="icon-sun" />,
  Search: () => <div data-testid="icon-search" />,
  Target: () => <div data-testid="icon-target" />,
  Home: () => <div data-testid="icon-home" />,
  MessageSquare: () => <div data-testid="icon-msg" />,
  User: () => <div data-testid="icon-user" />,
  Send: () => <div data-testid="icon-send" />,
  BookOpen: () => <div data-testid="icon-book" />,
  AlertTriangle: () => <div data-testid="icon-alert" />,
  Lightbulb: () => <div data-testid="icon-light" />,
  LogOut: () => <div data-testid="icon-logout" />,
  Crown: () => <div data-testid="icon-crown" />,
  Activity: () => <div data-testid="icon-activity" />,
  Info: () => <div data-testid="icon-info" />,
  CheckCircle: () => <div data-testid="icon-check" />,
  TrendingUp: () => <div data-testid="icon-trend" />
}));

const renderWithTheme = (ui) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Main Application Flow Tests', () => {

  test('renders Onboarding screen initially', () => {
    renderWithTheme(<MainApp />);
    expect(screen.getByText('Master Bluechip Investing')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Mobile Number')).toBeInTheDocument();
  });

  test('user can login and see Home Screen', () => {
    renderWithTheme(<MainApp />);

    // Type phone
    const input = screen.getByPlaceholderText('Enter Mobile Number');
    fireEvent.change(input, { target: { value: '9876543210' } });

    // Click Get Started
    const btn = screen.getByText('Get Started');
    fireEvent.click(btn);

    // Should navigate to Home -> Discover
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Explore Context')).toBeInTheDocument();
  });

  test('user can toggle theme', () => {
    renderWithTheme(<MainApp />);
    
    // Attempt theme toggle (mocked header)
    const themeBtn = screen.getByRole('button', { name: /Toggle Theme/i });
    fireEvent.click(themeBtn);

    // Depending on logic, class 'dark' is changed
    expect(document.body.className).toBe('light');
  });

  test('user can navigate to Chat and send a blocked query', async () => {
    renderWithTheme(<MainApp />);
    // bypass onboarding
    fireEvent.click(screen.getByText('Get Started'));

    // Go to Chat via bottom nav
    const chatTab = screen.getByText('Chat');
    fireEvent.click(chatTab);

    // Verify Chat is open
    expect(screen.getByText('Insights')).toBeInTheDocument();

    // Type query
    const chatInput = screen.getByPlaceholderText('Ask about a stock...');
    fireEvent.change(chatInput, { target: { value: 'Should I buy Reliance?' } });
    
    // Simulate enter or click send
    // Since icon returns div, get the outer button
    const sendBtn = chatInput.nextSibling;
    fireEvent.click(sendBtn);

    // Wait for AI response regarding block
    await waitFor(() => {
      expect(screen.getByText(/I cannot provide buy\/sell advice/i)).toBeInTheDocument();
    }, { timeout: 1500 });
  });

  test('user can click a chip on Home to transition to Chat', async () => {
    renderWithTheme(<MainApp />);
    fireEvent.click(screen.getByText('Get Started'));

    // Click "Explain company" chip
    const chipBtn = screen.getByText('Explain company');
    fireEvent.click(chipBtn);

    // Should shift to "Insights" (Chat)
    expect(screen.getByText('Insights')).toBeInTheDocument();
  });

  test('user can navigate to Profile and Logout', () => {
    renderWithTheme(<MainApp />);
    fireEvent.click(screen.getByText('Get Started'));

    // Go to Profile
    fireEvent.click(screen.getByText('Profile'));

    // Verify Profile 
    expect(screen.getByText('My Account')).toBeInTheDocument();
    
    // Logout
    fireEvent.click(screen.getByText('Log Out'));

    // Should be at Onboarding
    expect(screen.getByText('Master Bluechip Investing')).toBeInTheDocument();
  });

  test('user can access Paywall from Profile', () => {
    renderWithTheme(<MainApp />);
    fireEvent.click(screen.getByText('Get Started'));

    // Profile -> Premium
    fireEvent.click(screen.getByText('Profile'));
    fireEvent.click(screen.getByText('Upgrade to Premium'));

    // Verify Paywall
    expect(screen.getByText('Premium Plan')).toBeInTheDocument();
    expect(screen.getByText('Unlock Unlimited Insights')).toBeInTheDocument();
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

});
