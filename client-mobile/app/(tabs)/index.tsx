import React, { useState, useRef } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  ScrollView, SafeAreaView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { Link } from 'expo-router';
import { Baby, Send, Heart, LayoutDashboard } from 'lucide-react-native';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: 'Dios Marhay na aga! I am your NAGAalaga assistant. How can I help you today?' }
  ]);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    // 2. Placeholder for Backend AI Logic
    // In the next step, we will fetch the real Gemini response here!
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        role: 'ai', 
        text: 'I am processing your message in Bicol... (Backend connection coming next!)' 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Purple Header */}
      <View style={styles.header}>
        <View style={styles.logoGroup}>
          <View style={styles.iconCircle}>
            <Baby color="#fff" size={22} />
          </View>
          <View>
            <Text style={styles.headerTitle}>NAGAalaga</Text>
            <Text style={styles.headerSubtitle}>Maternal Chat AI</Text>
          </View>
        </View>
        
        {/* Navigation to Dashboard */}
        <Link href="/dashboard" asChild>
          <TouchableOpacity style={styles.dashButton}>
            <LayoutDashboard color="#E1BEE7" size={24} />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Chat Messages Area */}
      <ScrollView 
        style={styles.chatArea}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg) => (
          <View key={msg.id} style={[
            styles.bubble, 
            msg.role === 'user' ? styles.userBubble : styles.aiBubble
          ]}>
            <Text style={msg.role === 'user' ? styles.userText : styles.aiText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Section */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.footer}>
          <TextInput 
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Kumbas na an pagmati mo?..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Send color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.disclaimer}>Connected to Naga City Health Office • Emergency: 911</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3E5F5' }, // Soft Purple BG
  header: { 
    padding: 16, 
    backgroundColor: '#4A148C', // Deep Royal Purple
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  logoGroup: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconCircle: { backgroundColor: '#7B1FA2', padding: 8, borderRadius: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 11, color: '#E1BEE7', fontWeight: '500' },
  dashButton: { padding: 8 },
  chatArea: { flex: 1, padding: 16 },
  bubble: { 
    padding: 14, 
    borderRadius: 20, 
    marginBottom: 12, 
    maxWidth: '85%',
    elevation: 1 
  },
  aiBubble: { 
    backgroundColor: '#fff', 
    alignSelf: 'flex-start', 
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#E1BEE7'
  },
  userBubble: { 
    backgroundColor: '#7B1FA2', // Medium Purple
    alignSelf: 'flex-end', 
    borderTopRightRadius: 0 
  },
  aiText: { color: '#4A148C', fontSize: 15, lineHeight: 20 },
  userText: { color: '#fff', fontSize: 15, lineHeight: 20 },
  footer: { 
    padding: 12, 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    gap: 10, 
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E1BEE7'
  },
  input: { 
    flex: 1, 
    backgroundColor: '#F3E5F5', 
    borderRadius: 24, 
    paddingHorizontal: 16, 
    height: 48, 
    fontSize: 15, 
    color: '#4A148C' 
  },
  sendButton: { 
    backgroundColor: '#4A148C', 
    width: 48, 
    height: 48, 
    borderRadius: 24, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  disclaimer: { 
    fontSize: 10, 
    textAlign: 'center', 
    color: '#7B1FA2', 
    paddingBottom: 10, 
    backgroundColor: '#fff',
    fontWeight: '600'
  }
});